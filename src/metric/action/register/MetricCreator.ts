import { Metric } from "../../domain/Metric";
import { MetricDatetime } from "../../domain/MetricDatetime";
import { MetricName } from "../../domain/MetricName";
import { MetricRepository } from "../../domain/MetricRepository";
import { MetricValue } from "../../domain/MetricValue";

export class MetricCreator{

    private repository: MetricRepository;

    constructor(repository: MetricRepository) {
        this.repository = repository;
    }

/*
    public create(name: MetricName, value: MetricValue): void{
        let metric = new Metric(
            name,
            value,
            new MetricDatetime('2021-11-01 01:00:00')
        );
        
        console.log("creator.create");

        this.repository.create(metric);
    }
*/
    public create(name: MetricName, value: MetricValue): void{
        let metric = new Metric(
            name,
            value,
            new MetricDatetime(new Date().getTime())
        );
        
        this.repository.save(metric);
    }
}